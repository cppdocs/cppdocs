---
title: "std::next"
source_path: "cpp/iterator/next"
header: "<iterator>"
category: "iterator"
since: "C++17"
---

Return the nth successor (or -nth predecessor if n is negative) of iterator it.

## Declarations
```cpp
template< class InputIt >
InputIt next( InputIt it, typename std::iterator_traits<InputIt>::difference_type n = 1 );
```
_(since C++11) (until C++17)_

```cpp
template< class InputIt >
constexpr
InputIt next( InputIt it, typename std::iterator_traits<InputIt>::difference_type n = 1 );
```
_(since C++17)_

## Parameters
- `it`: an iterator
- `n`: number of elements to advance

## Return value
An iterator of type InputIt that holds the nth successor (or -nth predecessor if n is negative) of iterator it.

## Notes
Although the expression ++c.begin() often compiles, it is not guaranteed to do so: c.begin() is an rvalue expression, and there is no [LegacyInputIterator](/cpp/named_req/inputiterator/) requirement that specifies that increment of an rvalue is guaranteed to work. In particular, when iterators are implemented as pointers or its operator++ is lvalue-ref-qualified, ++c.begin() does not compile, while std::next(c.begin()) does.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    std::vector<int> v{4, 5, 6};
 
    auto it = v.begin();
    auto nx = std::next(it, 2);
    std::cout << *it << ' ' << *nx << '\n';
 
    it = v.end();
    nx = std::next(it, -2);
    std::cout << ' ' << *nx << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2353 | C++11 | next required LegacyForwardIterator | LegacyInputIterator allowed |

## See also
- [prev](/cpp/iterator/prev/)
- [advance](/cpp/iterator/advance/)
- [distance](/cpp/iterator/distance/)
- [ranges::next](/cpp/iterator/ranges/next/)
