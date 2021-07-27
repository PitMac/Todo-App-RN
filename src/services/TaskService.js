export const getTask = async () => {
  try {
    const response = await fetch('http://10.0.2.2:1337/tasks');
    const res = response.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async (title, description) => {
  try {
    const response = await fetch('http://10.0.2.2:1337/tasks', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    });
    const res = response.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (id, title, description) => {
  try {
    const response = await fetch('http://10.0.2.2:1337/tasks/' + id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    });
    const res = response.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async id => {
  try {
    const response = await fetch('http://10.0.2.2:1337/tasks/' + id, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const res = response.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};
