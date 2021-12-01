import { customersMock } from '../../models/Customer';
import {screen, render, userEvent, act} from '../../tests';
import CustomerForm from './CustomerForm';


describe("CustomerForm Test Suite", () => {
  it('CustomerForm it one', async () => {});

  it('CustomerForm render empty', async () => {
    const handleSubmit = jest.fn()

    act(() => {
      render(<CustomerForm handleSubmit={handleSubmit}  />);
    });
    const name = screen.getByTestId('name');
    const email = screen.getByTestId('email');
    const status = screen.getByTestId('status');
    
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(status).toBeInTheDocument();
    
    expect(name).toBeEmptyDOMElement();
    expect(email).toBeEmptyDOMElement();
    expect(status).toHaveValue('true');

  });
  
  it('CustomerForm typing', async () => {
    const handleSubmit = jest.fn()

    act(() => {
      render(<CustomerForm handleSubmit={handleSubmit}  />);
    });

    const name = screen.getByTestId('name');
    const email = screen.getByTestId('email');
    const status = screen.getByTestId('status');
    
    act(() => {
      userEvent.paste(name,'Jhon');
      userEvent.paste(email,'john@email.com');
      userEvent.selectOptions(status,'true')
    });

    expect(name).toHaveValue('Jhon');
    expect(email).toHaveValue('john@email.com');
    expect(status).toHaveValue('true');

  });
  
  it('CustomerForm render the customer received by props (update)', async () => {
    
    act(() => {
      const handleSubmit = jest.fn()
      render(<CustomerForm customerBeforeEdit={customersMock[0]} handleSubmit={handleSubmit}  />);
    });
    const name = screen.getByTestId('name');
    const email = screen.getByTestId('email');
    const status = screen.getByTestId('status');
    const submit = screen.getByTestId('submit');
    
    expect(name).toHaveValue(customersMock[0].name);
    expect(email).toHaveValue(customersMock[0].email);
    expect(status).toHaveValue(customersMock[0].status.toString());

  });
});