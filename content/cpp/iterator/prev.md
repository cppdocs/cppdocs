---
title: "std::prev"
source_path: "cpp/iterator/prev"
header: "<iterator>"
category: "iterator"
since: "C++17"
---

Return the nth predecessor (or -nth successor if n is negative) of iterator it.

## Declarations
```cpp
template< class BidirIt >
BidirIt prev( BidirIt it, typename std::iterator_traits<BidirIt>::difference_type n = 1 );
```
_(since C++11) (until C++17)_

```cpp
template< class BidirIt >
constexpr
BidirIt prev( BidirIt it, typename std::iterator_traits<BidirIt>::difference_type n = 1 );
```
_(since C++17)_

## Parameters
- `it`: an iterator
- `n`: number of elements it should be descended

## Return value
An iterator of type BidirIt that holds the nth predecessor (or -nth successor if n is negative) of iterator it.

## Notes
Although the expression --c.end() often compiles, it is not guaranteed to do so: c.end() is an rvalue expression, and there is no iterator requirement that specifies that decrement of an rvalue is guaranteed to work. In particular, when iterators are implemented as pointers or its operator-- is lvalue-ref-qualified, --c.end() does not compile, while std::prev(c.end()) does.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    std::vector<int> v{3, 1, 4};
 
    auto it = v.end();
    auto pv = std::prev(it, 2);
    std::cout << *pv << '\n';
 
    it = v.begin();
    pv = std::prev(it, -2);
    std::cout << *pv << '\n';
}
```

## See also
- [next](/cpp/iterator/next/)
- [advance](/cpp/iterator/advance/)
- [distance](/cpp/iterator/distance/)
- [ranges::prev](/cpp/iterator/ranges/prev/)
