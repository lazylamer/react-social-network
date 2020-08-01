import profileReducer, {addPostActionCreator, removePost} from "./profile-reducer";

let initialState = {
    users: [
        {
            id: 1,
            name: 'Sveta',
            src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HADZj_lRER6iE9d9xJmA-gHaLH%26pid%3DApi&f=1',
            msg: 'Very many letters'
        },
        {
            id: 2,
            name: 'Oleg',
            src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffineartamerica.com%2Fimages-medium%2Foleg-cassini-in-a-1950s-portrait-everett.jpg&f=1&nofb=1',
            msg: 'Very many letters again'
        }
    ],
    profile: null,
    status: ''
};

it('posts\'s length should be increased to 3 ',  () => {
    // 1. start test data
    let testString ='some string';
    let action = addPostActionCreator(testString)
    // 2. creating action
    let newState = profileReducer(initialState , action);
    // 3. expectation
    expect(newState.users.length).toBe(3);
});


it('posts\'s length should be reduced to 1',  () => {
    // 1. start test data
    let action = removePost(1)
    // 2. creating action
    let newState = profileReducer(initialState , action);
    // 3. expectation
    expect(newState.users.length).toBe(1);
});


it('posts\'s length shouldn\'t be changed if post\'s id is incorrect',  () => {
    // 1. start test data
    let action = removePost(100000000);
    // 2. creating action
    let newState = profileReducer(initialState , action);
    // 3. expectation
    expect(newState.users.length).toBe(2);
});

it('checking of correctness of new message', () => {
    // 1. data
    let testString = 'new post';
    // 2. creating action
    let action = addPostActionCreator(testString);
    let newState = profileReducer(initialState, action)
    // 3. expectation
    expect(newState.users[newState.users.length - 1].msg).toBe(testString);
});
