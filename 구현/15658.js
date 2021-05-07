function solution (N, a, cnt) {
  let max_ans = -100000000
  let min_ans = 100000000

  function dfs (idx, ans) {
    if (idx === N) {
      max_ans = Math.max(max_ans, ans)
      min_ans = Math.min(min_ans, ans)
      return
    }
    if (cnt[0] > 0) {
      cnt[0] -= 1
      dfs(idx + 1, ans + a[idx])
      cnt[0] += 1
    }
    if (cnt[1] > 0) {
      cnt[1] -= 1
      dfs(idx + 1, ans - a[idx])
      cnt[1] += 1
    }
    if (cnt[2] > 0) {
      cnt[2] -= 1
      dfs(idx + 1, ans * a[idx])
      cnt[2] += 1
    }
    if (cnt[3] > 0) {
      cnt[3] -= 1
      dfs(idx + 1, Math.floor(ans / a[idx]))
      cnt[3] += 1
    }
  }

  dfs(1, a[0])
  console.log(max_ans)
  console.log(min_ans)
}
