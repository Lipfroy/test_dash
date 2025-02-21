const { render, screen } = require('@testing-library/react');
const { ThemeProvider } = require('@mui/material');
const { createTheme } = require('@mui/material');
const Header = require('../Header').default;

jest.mock('../../theme');

describe('Header Component', () => {
  const theme = createTheme();
  
  const renderWithTheme = (component) => {
    return render(
      <ThemeProvider theme={theme}>
        {component}
      </ThemeProvider>
    );
  };

  it('renders title and subtitle correctly', () => {
    const title = 'Test Title';
    const subtitle = 'Test Subtitle';
    
    renderWithTheme(<Header title={title} subtitle={subtitle} />);
    
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });
}); 