function higherChildren(children) {
    return children.reduce((prev, curr) => prev <= curr ? curr : prev);
}

function smallerChildren(children) {
    return children.reduce((prev, curr) => prev >= curr ? curr : prev);
}

function averageChildren(children) {
    return children.reduce((prev, curr) => prev + curr) / children.length;
}

export { higherChildren, smallerChildren, averageChildren };