let initialState = {
    sideBarData: [
        {
            id: 1,
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HADZj_lRER6iE9d9xJmA-gHaLH%26pid%3DApi&f=1',
            name: 'Sveta'
        },
        {
            id: 3,
            img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffineartamerica.com%2Fimages-medium%2Foleg-cassini-in-a-1950s-portrait-everett.jpg&f=1&nofb=1',
            name: 'Oleg'
        },
        {
            id: 3,
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mckinsey.com%2F~%2Fmedia%2FMcKinsey%2FCareers%2520REDESIGN%2FMeet%2520our%2520People%2FProfiles%2FShadrack%2520Kiratu%2Fshadrack-kiratu_profile_1536x1152.ashx&f=1&nofb=1',
            name: 'Zanzibar'
        },

    ]
}

const sideBarReducer = (state = initialState , action) => {
    return state;
}

export default sideBarReducer;