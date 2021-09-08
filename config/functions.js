module.exports = {
  queries: {
    members: {
      getContactTypes: 'SELECT * FROM "usp_getContactTypes"()',
      addEducation: 'SELECT * FROM "usp_addEducation"($1,$2)',
      getEducations: 'SELECT * FROM "usp_getEducations"($1)',
      addCategory: 'SELECT * FROM "usp_addCategory"($1,$2,$3,$4)',
      editCategory: 'SELECT * FROM "usp_editCategory"($1,$2,$3,$4,$5)',
      deleteCategory: 'SELECT * FROM "usp_deleteCategory"($1,$2)',
      getCategories: 'SELECT * FROM "usp_getCategories"()',
      getPositions: 'SELECT * FROM "usp_getPositions"()',
      addPosition: 'SELECT * FROM "usp_addPosition"($1,$2,$3,$4)',
      editPosition: 'SELECT * FROM "usp_editPosition"($1,$2,$3,$4,$5)',
      deletePosition: 'SELECT * FROM "usp_deletePosition"($1,$2)',
      getPositionsAllLanguages:
        'SELECT * FROM "usp_getPositionsAllLanguages"()',
      deleteOrganization: 'SELECT * FROM "usp_deleteOrganization"($1,$2)',
      addOrganization:
        'SELECT * FROM "usp_addOrganization"($1,$2,$3,$4,$5,$6,$7,$8,$9)',
      editOrganization:
        'SELECT * FROM "usp_editOrganization"($1,$2,$3,$4,$5,$6,$7,$8,$9)',
      getOrganization: 'SELECT * FROM "usp_getOrganization"($1)',
      getOrganizationsByCategory:
        'SELECT * FROM "usp_getOrganizationsByCategory"($1)',
      getOrganizationsForTable:
        'SELECT * FROM "usp_getOrganizationsForTable"()',
      getOrganizationsForDropdown:
        'SELECT * FROM "usp_getOrganizationsForDropdown"($1)',
      getStatuses: 'SELECT * FROM "usp_getStatuses"()',
      addMember:
        'SELECT * FROM "usp_addMember"($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)',
      editMember:
        'SELECT * FROM "usp_editMember"($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)',
      login: 'SELECT * FROM "usp_login"($1)',
      getAllMembers: 'SELECT * FROM "usp_getAllMembers"($1,$2,$3,$4)',
      getProfileDetails: 'SELECT * FROM "usp_getProfileDetails"($1,$2)',
      getProfileDetailsForAdmin:
        'SELECT * FROM "usp_getProfileDetailsForAdmin"($1,$2)',
      getMemberDetails: 'SELECT * FROM "usp_getMemberDetails"($1,$2)',
      getMembersCount: 'SELECT * FROM "usp_getMembersCount"($1)',
      getMember: 'SELECT * FROM "usp_getMember"($1,$2,$3)',
      deleteMember: 'SELECT * FROM "usp_deleteMember"($1,$2)',
    },
    news: {
      addNews: 'SELECT * FROM "usp_addNews"($1,$2,$3)',
      deleteNews: 'SELECT * FROM "usp_deleteNews"($1,$2)',
      editNews: 'SELECT * FROM "usp_editNews"($1,$2,$3,$4)',
      getNews: 'SELECT * FROM "usp_getNews"($1)',
      getNewsDetails: 'SELECT * FROM "usp_getNewsDetails"($1)',
      getNewsCount: 'SELECT * FROM "usp_getNewsCount"($1)',
    },
    events: {
      addEvent: 'SELECT * FROM "usp_addEvent"($1,$2,$3,$4,$5,$6,$7)',
      editEvent: 'SELECT * FROM "usp_editEvent"($1,$2,$3,$4,$5,$6,$7,$8)',
      deleteEvent: 'SELECT * FROM "usp_deleteEvent"($1,$2)',
      getPastEvents: 'SELECT * FROM "usp_getPastEvents"($1,$2)',
      getUpcomingEvents: 'SELECT * FROM "usp_getUpcomingEvents"($1,$2)',
      getPastEventsCount: 'SELECT * FROM "usp_getPastEventsCount"()',
      getUpcomingEventsCount: 'SELECT * FROM "usp_getUpcomingEventsCount"()',

      getEventAgenda: 'SELECT * FROM "usp_getEventAgenda"($1)',
      getEventDetails: 'SELECT * FROM "usp_getEventDetails"($1)',
      getEventDetailsForEdit: 'SELECT * FROM "usp_getEventDetailsForAdmin"($1)',
      setIntention: 'SELECT * FROM "usp_setIntention"($1,$2,$3)',
      getEventsCount: 'SELECT * FROM "usp_getEventsCount"($1)',
    },
    posts: {
      getPosts: 'SELECT * FROM "usp_getPosts"($1,$2)',
      getComments: 'SELECT * FROM "usp_getComments"($1,$2)',
      getUrgencies: 'SELECT * FROM "usp_getUrgencies"($1)',
      getCategories: 'SELECT * FROM "usp_getCategories"($1)',
      getCategoriesForAdmin: 'SELECT * FROM "usp_getCategoriesForAdmin"()',
      addPost: 'SELECT * FROM "usp_addPost"($1,$2,$3,$4,$5)',
      addComment: 'SELECT * FROM "usp_addComment"($1,$2,$3)',
    },
    chats: {
      getUniqueId: 'SELECT * FROM "usp_getUniqueId"($1,$2)',
      getChats: 'SELECT * FROM "usp_getChats"($1,$2,$3,$4)',
      getChat: 'SELECT * FROM "usp_getChat"($1,$2,$3,$4,$5,$6)',
      deleteChat: 'SELECT * FROM "usp_deleteChat"($1,$2,$3)',
      createGroup: 'SELECT * FROM "usp_createGroup"($1,$2)',
      addGroupMembers: 'SELECT * FROM "usp_addGroupMembers"($1,$2,$3)',
      sendMessage: 'SELECT * FROM "usp_sendMessage"($1,$2,$3,$4)',
      getGroupMembers: 'SELECT * FROM "usp_getGroupMembers"($1,$2,$3)',
    },
    locations: {
      addAddress: 'SELECT * FROM "usp_addAddress"($1,$2,$3,$4)',
      getCountries: 'SELECT * FROM "usp_getCountries"()',
      getStates: 'SELECT * FROM "usp_getStates"($1)',
      getCities: 'SELECT * FROM "usp_getCities"($1)',
    },
    admin: {
      login: 'SELECT * FROM "usp_adminLogin"($1)',
    },
  },
};
