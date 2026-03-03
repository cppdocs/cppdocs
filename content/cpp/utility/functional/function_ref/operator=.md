---
title: "std::function_ref::operator="
source_path: "cpp/utility/functional/function_ref/operator"
category: "utility"
since: "C++26"
---

1) Copy assignment operator is explicitly-defaulted. std::function_ref satisfies [copyable](/cpp/concepts/copyable/) and [TriviallyCopyable](/cpp/named_req/triviallycopyable/). This defaulted assignment operator performs a shallow copy of the stored [thunk-ptr](/cpp/utility/functional/function_ref/#thunk-ptr) and [bound-entity](/cpp/utility/functional/function_ref/#bound-entity).

## Declarations
```cpp
constexpr function_ref& operator=( const function_ref& ) noexcept = default;
```
_(since C++26)_

```cpp
template< class T >
constexpr function_ref& operator=( T ) = delete;
```
_(since C++26)_

## Return value
*this

## See also
- [(constructor)](/cpp/utility/functional/function_ref/function_ref/)
- [operator=](/cpp/utility/functional/copyable_function/operator/)
- [operator=](/cpp/utility/functional/function/operator/)
- [operator=](/cpp/utility/functional/move_only_function/operator/)
