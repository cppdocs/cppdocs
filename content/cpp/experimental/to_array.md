---
title: "std::experimental::to_array"
source_path: "cpp/experimental/to_array"
header: "<experimental/array>"
category: "experimental"
---

Creates a [std::array](/cpp/container/array/) from the built-in array a. The elements of the [std::array](/cpp/container/array/) are copy-initialized from the corresponding element of a.

## Declarations
```cpp
template< class T, std::size_t N >
constexpr std::array<std::remove_cv_t<T>, N> to_array(T (&a)[N]);
```
_(library fundamentals TS v2)_

## Parameters
- `a`: the built-in array to be used to initialize the std::array

## Return value
An [std::array](/cpp/container/array/) object whose elements are copy-initialized from the corresponding element of a.

## Example
```cpp
#include <cassert>
#include <cstdlib>
#include <experimental/array>
#include <unistd.h>
 
// mkstemp(3) that works
template<std::size_t N>
int tempfd(char const (&tmpl)[N])
{
    auto s = std::experimental::to_array(tmpl);
    int fd = mkstemp(s.data());
    if (fd != -1)
        unlink(s.data());
 
    return fd;
}
 
int main()
{
    int fd = tempfd("/tmp/test.XXXXXX");
    int rt = close(fd);
    assert(rt == 0);
}
```

## See also
- [make_array](/cpp/experimental/make_array/)
- [std::array](/cpp/container/array/)
