---
title: "std::is_trivially_copyable"
source_path: "cpp/types/is_trivially_copyable"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_trivially_copyable is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_trivially_copyable;
```
_(since C++11)_

## Notes
Objects of trivially-copyable types that are not potentially-overlapping subobjects are the only C++ objects that may be safely copied with [std::memcpy](/cpp/string/byte/memcpy/) or serialized to/from binary files with [std::ofstream::write()](/cpp/io/basic_ostream/write/) / [std::ifstream::read()](/cpp/io/basic_istream/read/).

## Example
```cpp
#include <type_traits>
 
struct A { int m; };
static_assert(std::is_trivially_copyable_v<A> == true);
 
struct B { B(B const&) {} };
static_assert(std::is_trivially_copyable_v<B> == false);
 
struct C { virtual void foo(); };
static_assert(std::is_trivially_copyable_v<C> == false);
 
struct D
{
    int m;
 
    D(D const&) = default; // -> trivially copyable
    D(int x) : m(x + 1) {}
};
static_assert(std::is_trivially_copyable_v<D> == true);
 
int main() {}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2015 | C++11 | T could be an array of incompleteclass type with unknown bound | the behavior isundefined in this case |

## See also
- [is_trivial](/cpp/types/is_trivial/)
