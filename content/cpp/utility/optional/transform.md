---
title: "std::optional<T>::transform"
source_path: "cpp/utility/optional/transform"
category: "utility"
since: "C++23"
---

If *this contains a value, invokes f with the contained value as an argument, and returns an std::optional that contains the result of that invocation; otherwise, returns an empty std::optional.

## Declarations
```cpp
template< class F >
constexpr auto transform( F&& f ) &;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto transform( F&& f ) const&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto transform( F&& f ) &&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto transform( F&& f ) const&&;
```
_(since C++23)_

## Parameters
- `f`: a suitable function or Callable object whose call signature returns a non-reference type

## Return value
An [std::optional](/cpp/utility/optional/) containing the result of f or an empty [std::optional](/cpp/utility/optional/), as described above.

## Notes
Because transform directly constructs a U object at the right location, rather than passing it to a constructor, [std::is_move_constructible_v](/cpp/types/is_move_constructible/)<U> can be false.

As the callable f can't return a reference type, it cannot be a [pointer to data member](/cpp/language/pointer/#Pointers_to_data_members).

Some languages call this operation [map](https://en.wikipedia.org/wiki/Map_(higher-order_function)).

## Example
```cpp
#include <iostream>
#include <optional>
 
struct A { /* ... */ };
struct B { /* ... */ };
struct C { /* ... */ };
struct D { /* ... */ };
 
auto A_to_B(A) -> B { /* ... */ std::cout << "A => B \n"; return {}; }
auto B_to_C(B) -> C { /* ... */ std::cout << "B => C \n"; return {}; }
auto C_to_D(C) -> D { /* ... */ std::cout << "C => D \n"; return {}; }
 
void try_transform_A_to_D(std::optional<A> o_A)
{
    std::cout << (o_A ? "o_A has a value\n" : "o_A is empty\n");
 
    std::optional<D> o_D = o_A.transform(A_to_B)
                              .transform(B_to_C)
                              .transform(C_to_D);
 
    std::cout << (o_D ? "o_D has a value\n\n" : "o_D is empty\n\n");
};
 
int main()
{
    try_transform_A_to_D( A{} );
    try_transform_A_to_D( {} );
}
```

## See also
- [value_or](/cpp/utility/optional/value_or/)
- [and_then](/cpp/utility/optional/and_then/)
- [or_else](/cpp/utility/optional/or_else/)
