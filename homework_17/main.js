var template = new RegExp(/^((8-?0)|(\+?375))-?((25)|(29)|(33)|(44))-?\d{3}-?\d{2}-?\d{2}$/);

template.test('80297452233');
template.test('+375-29-333-44-55');
template.test('375339996677');
template.test('8-0447778899');
template.test('+37529333-4455');