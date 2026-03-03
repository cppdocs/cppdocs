---
title: "std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::at"
source_path: "cpp/container/flat_map/at"
category: "container"
since: "C++23"
---

Returns a reference to the mapped value of the element with specified key. If no such element exists, an exception of type [std::out_of_range](/cpp/error/out_of_range/) is thrown.

## Declarations
```cpp
T& at( const Key& key );
```
_(since C++23)_

```cpp
const T& at( const Key& key ) const;
```
_(since C++23)_

```cpp
template< class K >
T& at( const K& x );
```
_(since C++23)_

```cpp
template< class K >
const T& at( const K& x ) const;
```
_(since C++23)_

## Parameters
- `key`: the key of the element to find
- `x`: a value of any type that can be transparently compared with a key

## Return value
A reference to the mapped value of the requested element.

## Example
```cpp
#include <cassert>
#include <iostream>
#include <flat_map>
 
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
    std::flat_map<int, char> map{{1, 'a'}, {2, 'b'}};
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
    std::flat_map<HeavyKey, char, std::less<>> map2{{{1}, 'a'}, {{2}, 'b'}};
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

## See also
- [operator[]](/cpp/container/flat_map/operator_at/)
- [find](/cpp/container/flat_map/find/)
