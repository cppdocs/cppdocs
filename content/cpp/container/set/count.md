---
title: "std::set<Key,Compare,Allocator>::count"
source_path: "cpp/container/set/count"
category: "container"
since: "C++14"
---

Returns the number of elements with key that compares equivalent to the specified argument.

## Declarations
```cpp
size_type count( const Key& key ) const;
```

```cpp
template< class K >
size_type count( const K& x ) const;
```
_(since C++14)_

## Parameters
- `key`: key value of the elements to count
- `x`: alternative value to compare to the keys

## Return value
Number of elements with key that compares equivalent to key or x, which, for overload (1), is either 1 or 0.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_generic_associative_lookup
201304L
(C++14)
Heterogeneous comparison lookup in associative containers; overload (2)

## Example
```cpp
#include <functional>
#include <iostream>
#include <set>
 
struct S
{
    int x;
    S(int i) : x{i} { std::cout << "S{" << i << "} "; }
    bool operator<(S const& s) const { return x < s.x; }
};
 
struct R
{
    int x;
    R(int i) : x{i} { std::cout << "R{" << i << "} "; }
    bool operator<(R const& r) const { return x < r.x; }
};
 
bool operator<(R const& r, int i) { return r.x < i; }
bool operator<(int i, R const& r) { return i < r.x; }
 
int main()
{
    std::set<int> t{3, 1, 4, 1, 5};
    std::cout << t.count(1) << ", " << t.count(2) << ".\n";
 
    std::set<S> s{3, 1, 4, 1, 5};
    std::cout << ": " << s.count(1) << ", " << s.count(2) << ".\n";
        // Two temporary objects S{1} and S{2} were created.
        // Comparison function object is defaulted std::less<S>,
        // which is not transparent (has no is_transparent member type).
 
    std::set<R, std::less<>> r{3, 1, 4, 1, 5};
    std::cout << ": " << r.count(1) << ", " << r.count(2) << ".\n";
        // C++14 heterogeneous lookup; temporary objects were not created.
        // Comparator std::less<void> has predefined is_transparent.
}
```

## See also
- [find](/cpp/container/set/find/)
- [equal_range](/cpp/container/set/equal_range/)
