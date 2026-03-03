---
title: "std::experimental::randint"
source_path: "cpp/experimental/randint"
header: "<experimental/random>"
category: "experimental"
---

Generates a random integer in the closed interval [a, b].

## Declarations
```cpp
template< class IntType >
IntType randint( IntType a, IntType b );
```
_(library fundamentals TS v2)_

## Parameters
- `a, b`: integer values specifying the range

## Return value
A random integer i in the closed interval [a, b], produced using a thread-local instance of [std::uniform_int_distribution](/cpp/numeric/random/uniform_int_distribution/)<IntType> invoked with the [per-thread random number engine](/cpp/experimental/lib_extensions_2/#per-thread_engine).

## Example
```cpp
#include <experimental/random>
#include <iostream>
 
int main()
{
    int random_number = std::experimental::randint(100, 999);
    std::cout << "random 3-digit number: " << random_number << '\n';
}
```

## See also
- [reseed](/cpp/experimental/reseed/)
