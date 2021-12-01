import { customersMock } from '../../models/Customer';
import {screen, render} from '../../tests';
import CustomersList from './CustomersList';

describe("CustomersList Test Suite", () => {
  it('Customers List shows at least one element', () => {
    render(<CustomersList customers={customersMock} />);
    const items = screen.getAllByRole('listitem');
    expect(items.length).toBeGreaterThanOrEqual(1);
  });
  it('Customers List render customer name received by props', () => {
    render(<CustomersList customers={customersMock} />);
    expect(screen.getByText(customersMock[0].name)).toBeInTheDocument();    
  });
});