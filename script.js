document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Validate form fields
    const legalName = document.getElementById('legalName').value;
    const contactInfo = document.getElementById('contactInfo').value;
    const leadershipRoles = document.getElementById('leadershipRoles').value;
    const artisticSkills = document.get