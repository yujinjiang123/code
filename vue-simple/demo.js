function ListNode(val) {
    this.val = val;
    this.next = null;
}

function generateList(arr) {
    const head = new ListNode(arr[0]);
    let p = head;
    for (let i = 1, len = arr.length; i < len; i++) {
        p.next = new ListNode(arr[i]);
        p = p.next;
    }
    return head;
}

function reverseKGroup(head, k) {
    let i = 0, p = head, q = null;
    head = reverse(head, k);
    while (p) {
        q = p.next;
        p.next = reverse(q, k);
        if (p.next === q) {
            break;
        }
        p = q;
    }
    return head;
}

function reverse(start, k) {
    let p = start, q = start, i;
    for (i = 0; i < k && q; i++) {
        q = q.next;
    }
    if (i < k) {
        return start;
    }
    let pre = q;
    while (p !== q) {
        let next = p.next;
        p.next = pre;
        pre = p;
        p = next;
    }
    return pre;
}

console.log(JSON.stringify(reverseKGroup(generateList([1, 2, 3, 4, 5]), 3)));
