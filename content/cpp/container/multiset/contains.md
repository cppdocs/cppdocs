---
title: "std::multiset<Key,Compare,Allocator>::contains"
source_path: "cpp/container/multiset/contains"
category: "container"
since: "C++20"
---

1) Checks if there is an element with key equivalent to key in the container.

## Declarations
```cpp
bool contains( const Key& key ) const;
```
_(since C++20)_

```cpp
template< class K >
bool contains( const K& x ) const;
```
_(since C++20)_

## Parameters
- `key`: key value of the element to search for
- `x`: a value of any type that can be transparently compared with a key

## Return value
true if there is such an element, otherwise false.

## Example
```cpp
#include <iostream>
#include <set>
 
int main()
{
    std::multiset<int> example{1, 2, 3, 4};
 
    for (int x : {2, 5})
        if (example.contains(x))
            std::cout << x << ": Found\n";
        else
            std::cout << x << ": Not found\n";
}
```

## See also
- [find](/cpp/container/multiset/find/)
- [count](/cpp/container/multiset/count/)
- [equal_range](/cpp/container/multiset/equal_range/)
