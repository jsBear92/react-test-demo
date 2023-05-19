import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

test('render the correct number of rows', () => {
    // Render the component
    const users = [
        { name: 'jane', email: 'jane@jane.com' },
        { name: 'john', email: 'john@john.com' },
    ];
    const { container } =render(<UserList users={users} />);

    // Find all the rows in the table
    // eslint-disable-next-line
    const rows = container.querySelectorAll('tbody tr');

    // Assertion: correct number of rows in the table
    expect(rows).toHaveLength(2);
});

test('render the email and nmae of each user', () => {

});