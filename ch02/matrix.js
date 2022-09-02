
function dot_product(v, w) {
    return accumulate(plus, 0, accumulate_n(times, 1, list(v, w)));
}

function accumulate_n(op, init, seqs) {
    return is_null(head(seqs))
    ? null
    : pair(accumulate(op, init, h??i),
    accumulate_n(op, init, h??i));
}

function matrix_times_vector(m, v) {
    return map(h??i, m);
}

function transpose(mat) {
    return accumulate_n(h??i, h??i, mat);
}

function matrix_times_matrix(n, m) {
    const cols = transpose(n);
    return map(h??i, m);
}
