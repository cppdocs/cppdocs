---
title: "std::span<T,Extent>::rbegin, std::span<T,Extent>::crbegin"
source_path: "cpp/container/span/rbegin"
category: "container"
since: "C++20"
---

Returns a reverse iterator to the first element of the reversed span. It corresponds to the last element of the non-reversed span. If the span is empty, the returned iterator is equal to rend().

## Declarations
```cpp
constexpr reverse_iterator rbegin() const noexcept;
```
_(since C++20)_

```cpp
constexpr const_reverse_iterator crbegin() const noexcept;
```
_(since C++23)_

## Return value
Reverse iterator to the first element.

## Notes
The [underlying iterator](/cpp/iterator/reverse_iterator/base/) of the returned reverse iterator is the [end iterator](/cpp/container/span/end/). Hence the returned iterator is invalidated if and when the end iterator is invalidated.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <span>
 
int main()
{
    constexpr std::span<const char> code{"@droNE_T0P_w$s@s#_SECRET_a,p^42!"};
 
    auto hack = [](const unsigned O) { return O - 0141 < 120; };
 
    std::copy_if(code.rbegin(), code.rend(),
        std::ostream_iterator<const char>(std::cout), hack);
 
    std::cout << '\n';
}
```

## See also
- [rendcrend](/cpp/container/span/rend/)
- [rbegincrbegin](/cpp/iterator/rbegin/)
