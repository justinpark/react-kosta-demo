const ThemeContext = React.createContext('light');
class ThemeProvider extends React.Component {
  state = { theme: 'light' };
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value={this.state.theme}>
      	{this.props.children}
      </ThemeContext.Provider>
    );
  }
}

const { Consumer: ThemeConsumer } = ThemeContext;

function withTheme(WrappedComponent) {
  return function WithThemeComponent(props) {
    return (
      <ThemeContext.Consumer>
        {theme => <WrappedComponent {...props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  };
}

export {
  withTheme,
  ThemeConsumer,
  ThemeProvider,
};
