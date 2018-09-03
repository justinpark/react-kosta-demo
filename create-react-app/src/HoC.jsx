const withLoading = (WrappedComponent) => (props) =>
  props.isLoading
    ? <div>Loading ...</div>
    : <WrappedComponent { ...props } />;

const TodoListWithLoading = withLoading(TodoList);

const withError = (WrappedComponent) => ({ hasError, errorMessage }) =>
  hasError
    ? <div className="error">{errorMessage || '문제발생'}</div>
    : <WrappedComponent { ...props } />;

const TodoListWithError = withError(TodoList);


const withError = defaultErrorMessage => WrappedComponent => ({ hasError, errorMessage }) =>
  hasError
    ? <div className="error">{errorMessage || defaultErrorMessage}</div>
    : <WrappedComponent { ...props } />;

const TodoListWithError = withError('문제발생')(TodoList);

const TodoListWithErrorAndLoading = withError('문제발생')(withLoading(TodoList));

const compose = (...funcs) => funcs.reduce((a, b) => (...args) => a(b(...args)), arg => arg);

const TodoListWithErrorAndLoading = compose(
  withError('문제발생'),
  withLoading,
)(TodoList);
