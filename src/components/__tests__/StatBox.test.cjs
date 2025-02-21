const { render, screen } = require('@testing-library/react');
const { ThemeProvider } = require('@mui/material');
const { createTheme } = require('@mui/material');
const StatBox = require('../StatBox').default;
const { EmailOutlined } = require('@mui/icons-material');

jest.mock('../../theme');

describe('StatBox Component', () => {
  const theme = createTheme();
  
  const renderWithTheme = (component) => {
    return render(
      <ThemeProvider theme={theme}>
        {component}
      </ThemeProvider>
    );
  };

  it('renders all props correctly', () => {
    const props = {
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      icon: <EmailOutlined />,
      progress: '0.75',
      increase: '+14%'
    };
    
    renderWithTheme(<StatBox {...props} />);
    
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.subtitle)).toBeInTheDocument();
    expect(screen.getByText(props.increase)).toBeInTheDocument();
  });
}); 