---
title: "std::map<Key,T,Compare,Allocator>::at"
source_path: "cpp/container/map/at"
category: "container"
since: "C++26"
---

Returns a reference to the mapped value of the element with specified key. If no such element exists, an exception of type [std::out_of_range](/cpp/error/out_of_range/) is thrown.

## Declarations
```cpp
T& at( const Key& key );
```

```cpp
const T& at( const Key& key ) const;
```

```cpp
template< class K >
T& at( const K& x );
```
_(since C++26)_

```cpp
template< class K >
const T& at( const K& x ) const;
```
_(since C++26)_

## Parameters
- `key`: the key of the element to find
- `x`: a value of any type that can be transparently compared with a key

## Return value
A reference to the mapped value of the requested element.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_associative_heterogeneous_insertion
202311L
(C++26)
Heterogeneous overloads for the remaining member functions in ordered and unordered associative containers. (3,4)

## Example
```cpp
#include <cassert>
#include <iostream>
#include <map>
 
struct LightKey { int o; };
struct HeavyKey { int o[1000]; };
 
// The container must use std::less<> (or other transparent Comparator) to
// access overloads (3,4). This includes standard overloads, such as
// comparison between std::string and std::string_view.
bool operator<(const HeavyKey& x, const LightKey& y) { return x.o[0] < y.o; }
bool operator<(const LightKey& x, const HeavyKey& y) { return x.o < y.o[0]; }
bool operator<(const HeavyKey& x, const HeavyKey& y) { return x.o[0] < y.o[0]; }
 
int main()
{
    std::map<int, char> map{{1, 'a'}, {2, 'b'}};
    assert(map.at(1) == 'a');
    assert(map.at(2) == 'b');
    try
    {
        map.at(13);
    }
    catch(const std::out_of_range& ex)
    {
        std::cout << "1) out_of_range::what(): " << ex.what() << '\n';
    }
 
#ifdef __cpp_lib_associative_heterogeneous_insertion
    // Transparent comparison demo.
    std::map<HeavyKey, char, std::less<>> map2{{{1}, 'a'}, {{2}, 'b'}};
    assert(map2.at(LightKey{1}) == 'a');
    assert(map2.at(LightKey{2}) == 'b');
    try
    {
        map2.at(LightKey{13});
    }
    catch(const std::out_of_range& ex)
    {
        std::cout << "2) out_of_range::what(): " << ex.what() << '\n';
    }
#endif
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 464 | C++98 | map did not have this member function | added |
| LWG 703 | C++98 | the complexity requirement was missing | added |
| LWG 2007 | C++98 | the return value referred to the requested element | refers to its mapped value |

## See also
- [operator[]](/cpp/container/map/operator_at/)
- [find](/cpp/container/map/find/)
