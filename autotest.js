// autotest for method https://swapi.dev/api/people/10


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Obi-Wan Kenobi", function () {
    pm.expect(pm.response.text()).to.include("blue-gray");
});
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});
