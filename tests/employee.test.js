import Employee from '../lib/employee';

describe('Employee class', () => {
 
  it('should return an object with name, id, and email properties', () => {
  
    const employee = new Employee('Chef', 1, 'masterchef@gmail.com');
    expect(employee instanceof Employee).toBe(true);
    expect(employee).toEqual(expect.objectContaining({
      name: 'Chef',
      id: 1,
      email: 'masterchef@gmail.com'
    }));
  });


  it('should return the name of the employee', () => {
   const employee = new Employee('Chef', 1, 'masterchef@gmail.com');
    expect(employee.getName()).toBe('Chef');
  });


  it('should return the id of the employee', () => {
    const employee = new Employee('Chef', 1, 'masterchef@gmail.com');
    expect(employee.getId()).toBe(1);
  });

  it('should return the email of the employee', () => {
    const employee = new Employee('Chef', 1, 'masterchef@gmail.com');
    expect(employee.getEmail()).toBe('masterchef@gmail.com');
  });

  it('should return the role of the employee', () => {
    const employee = new Employee('Chef', 1, 'masterchef@gmail.com');
    expect(employee.getRole()).toBe('Employee');
  });
});
