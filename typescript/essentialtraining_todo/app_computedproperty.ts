//That allows you to put an expression in brackets [], that will be computed and used as the property name.
const osPrefix = 'os_';

var support = {
    [osPrefix + 'Windows']: isSupported('Windows'),
    [osPrefix + 'iOS']: isSupported('iOS'),
    [osPrefix + 'Android']: isSupported('Android')
}

function isSupported(os) {
    return Math.random() >= 0.5;
}
