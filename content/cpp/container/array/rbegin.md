---
title: "std::array<T,N>::rbegin, std::array<T,N>::crbegin"
source_path: "cpp/container/array/rbegin"
category: "container"
---

Returns a reverse iterator to the first element of the reversed array. It corresponds to the last element of the non-reversed array. If the array is empty, the returned iterator is equal to [rend()](/cpp/container/array/rend/).

## Declarations
```cpp
reverse_iterator rbegin() noexcept;
```
_(since C++11) (constexpr since C++17)_

```cpp
const_reverse_iterator rbegin() const noexcept;
```
_(since C++11) (constexpr since C++17)_

```cpp
const_reverse_iterator crbegin() const noexcept;
```
_(since C++11) (constexpr since C++17)_

## Return value
Reverse iterator to the first element.

## Notes
The [underlying iterator](/cpp/iterator/reverse_iterator/base/) of the returned reverse iterator is the [end iterator](/cpp/container/array/end/). Hence the returned iterator is invalidated if and when the end iterator is invalidated.

## Example
```cpp
#include <algorithm>
#include <array>
#include <iostream>
#include <string>
#include <string_view>
 
void print(const std::string_view s) { std::cout << s << ' '; }
 
int main()
{
    const std::array<std::string_view, 8> data
    {
        "▁", "▂", "▃", "▄", "▅", "▆", "▇", "█"
    };
    std::array<std::string, 8> arr;
 
    std::copy(data.cbegin(), data.cend(), arr.begin());
 
    print("Print 'arr' in direct order using [cbegin, cend):\t");
    std::for_each(arr.cbegin(), arr.cend(), print);
 
    print("\n\nPrint 'arr' in reverse order using [crbegin, crend):\t");
    std::for_each(arr.crbegin(), arr.crend(), print);
}
```

## See also
- [rendcrend](/cpp/container/array/rend/)
- [rbegincrbegin](/cpp/iterator/rbegin/)
