function skillsMember() {
  const member = document.querySelector('.member');
  const memberSkills = document.querySelector('.member-skills');
  const memberSkillsList = document.querySelector('.member-skills-list');

  member.addEventListener('click', function() {
    memberSkills.classList.toggle('active');
  });

  memberSkillsList.addEventListener('click', function() {
    memberSkills.classList.remove('active');
  });
}