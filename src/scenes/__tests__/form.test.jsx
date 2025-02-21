import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import Form from '../form';
import userEvent from '@testing-library/user-event';
import { tokens } from '../../theme';

jest.mock('../../theme');

describe('Form Component', () => {
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

  it('validates form inputs correctly', async () => {
    renderWithTheme(<Form />);
    
    // Get form elements
    const firstNameInput = screen.getByLabelText(/first name/i);
    const submitButton = screen.getByRole('button', { name: /create new user/i });
    
    // Click submit without filling form
    fireEvent.click(submitButton);
    
    // Check for validation message
    await waitFor(() => {
      expect(screen.getByText('required')).toBeInTheDocument();
    });
    
    // Fill in a field
    await userEvent.type(firstNameInput, 'John');
    
    // Verify input value
    expect(firstNameInput).toHaveValue('John');
  });
}); 