export const createMentor = User => {
    return fetch("http://localhost:4000/addmentor", {
        method: "POST",
        headers: {
            Accept: "application/json"
        },
        body: User
    }).then(data => {
        return data.json();
    }).catch(err => {
        console.log(err);
    });
}

export const updateMentor = (userId, User) => {
    return fetch(`http://localhost:4000/mentor/update/${userId}`, {
        method:"PUT",
        headers: {
            Accept: "application/json"
        },
        body: User
    }).then(data => {
        return data.json();
    });
}

export const singleMentor = (userId) => {
    return fetch(`http://localhost:4000/mentor/${userId}`, {
        method: "GET",
    }).then(data => {
        return data.json();
    });
}

export const remove = (userId) => {
    return fetch(`http://localhost:4000/mentor/delete/${userId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const allMentor = () => {
    return fetch("http://localhost:4000/allmentor", {
        method: "GET"
    }).then(data => {
        return data.json();
    }).catch(err => {
        console.log(err);
    });
}

export const taskGiver = (userId, User) => {
    return fetch(`http://localhost:4000/givetask/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: User
    }).then(data => {
        return data.json();
    }).catch(err => {
        console.log(err);
    });
}