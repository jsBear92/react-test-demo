import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

test('render the correct number of rows', () => {
    // Render the component
    const users = [
        { name: 'jane', email: 'jane@jane.com' },
        { name: 'john', email: 'john@john.com' },
    ];
    render(<UserList users={users} />);

    // Find all the rows in the table
    const rows = within(screen.getByTestId('users')).getAllByRole('row');

    // Assertion: correct number of rows in the table
    expect(rows).toHaveLength(2);
});

test('render the email and nmae of each user', () => {

});