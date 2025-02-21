import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import Header from '../Header';
import { tokens } from '../../theme';

jest.mock('../../theme');

describe('Header Component', () => {
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

  it('renders title and subtitle correctly', () => {
    const title = 'Test Title';
    const subtitle = 'Test Subtitle';
    
    renderWithTheme(<Header title={title} subtitle={subtitle} />);
    
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });
}); 