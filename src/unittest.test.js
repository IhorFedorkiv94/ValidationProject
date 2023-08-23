import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './path-to-your-reducer'; // replace with the path to your reducer
import Form from './Form'; // replace with the path to your Form component

const renderWithRedux = (component, { initialState, store = createStore(reducer, initialState) } = {}) => {
   return {
      ...render(<Provider store={store}>{component}</Provider>),
      store,
   };
};

describe('Form Component', () => {
   test('validates first_name and last_name fields', () => {
      renderWithRedux(<Form />);

      const submitButton = screen.getByRole('button', { name: /submit/i });

      userEvent.click(submitButton);
      
      expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/last name is required/i)).toBeInTheDocument();
   });

   test('validates email field', () => {
      renderWithRedux(<Form />);
      
      const emailInput = screen.getByLabelText(/email/i);
      const submitButton = screen.getByRole('button', { name: /submit/i });

      userEvent.type(emailInput, 'invalid-email');
      userEvent.click(submitButton);

      expect(screen.getByText(/invalid email format/i)).toBeInTheDocument();
   });

   test('validates message field for length', () => {
      renderWithRedux(<Form />);
      
      const messageInput = screen.getByLabelText(/message/i);
      const submitButton = screen.getByRole('button', { name: /submit/i });

      userEvent.type(messageInput, 'short');
      userEvent.click(submitButton);

      expect(screen.getByText(/message should be at least 10 characters long/i)).toBeInTheDocument();
   });
});
