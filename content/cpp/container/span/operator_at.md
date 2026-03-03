---
title: "std::span<T,Extent>::operator[]"
source_path: "cpp/container/span/operator_at"
category: "container"
since: "C++20"
---

Returns a reference to the idxth element of the sequence. The behavior is undefined if idx is out of range (i.e., if it is greater than or equal to size()).

## Declarations
```cpp
constexpr reference operator[]( size_type idx ) const;
```
_(since C++20)_

## Parameters
- `idx`: the index of the element to access

## Return value
A reference to the idxth element of the sequence, i.e., data()[idx].

## Example
```cpp
#include <cstddef>
#include <iostream>
#include <span>
#include <utility>
 
void reverse(std::span<int> span)
{
    for (std::size_t i = 0, j = std::size(span); i < j; ++i)
    {
        --j;
        std::swap(span[i], span[j]);
    }
}
 
void print(std::span<const int> const span)
{
    for (int element : span)
        std::cout << element << ' ';
    std::cout << '\n';
}
 
int main()
{
    int data[]{1, 2, 3, 4, 5};
    print(data);
    reverse(data);
    print(data);
}
```

## See also
- [at](/cpp/container/span/at/)
- [data](/cpp/container/span/data/)
- [size](/cpp/container/span/size/)
- [as_bytesas_writable_bytes](/cpp/container/span/as_bytes/)
