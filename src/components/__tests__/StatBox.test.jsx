import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import StatBox from '../StatBox';
import { EmailOutlined } from '@mui/icons-material';
import { tokens } from '../../theme';

jest.mock('../../theme');

describe('StatBox Component', () => {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });
  const colors = tokens(theme.palette.mode);
  
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