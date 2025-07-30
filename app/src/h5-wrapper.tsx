import { App } from '@h5web/app';
import { H5WasmLocalFileProvider } from '@h5web/h5wasm';

type Props = {
  file?: File;
};

function H5Wrapper({ file }: Props) {
  if (!file) {
    return <p>Please provide a .h5 file to view.</p>;
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <H5WasmLocalFileProvider file={file}>
        <App />
      </H5WasmLocalFileProvider>
    </div>
  );
}

export default H5Wrapper;
