import { useRouteError } from 'react-router-dom';

function Error() { // Error component
  console.error(useRouteError());
  return <div>Error Page</div>;
}

export default Error;
