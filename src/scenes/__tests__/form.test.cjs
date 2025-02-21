const { render, screen, fireEvent, waitFor } = require('@testing-library/react');
const { ThemeProvider } = require('@mui/material');
const { createTheme } = require('@mui/material');
const Form = require('../form').default;
const userEvent = require('@testing-library/user-event');

jest.mock('../../theme');

describe('Form Component', () => {
  const theme = createTheme();
  
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