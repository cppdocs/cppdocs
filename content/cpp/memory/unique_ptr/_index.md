---
title: "std::unique_ptr"
source_path: "cpp/memory/unique_ptr"
header: "<memory>"
since: "C++11"
---

`std::unique_ptr` is a move-only smart pointer with exclusive ownership of a dynamically managed object.

At any point, either exactly one `unique_ptr` owns the object or the pointer is empty. Destruction, [reset()](/cpp/memory/unique_ptr/reset/), and ownership transfer through moves are the core operations.

## Declarations
```cpp
template< class T, class Deleter = std::default_delete<T> >
class unique_ptr;
```
_(since C++11)_

```cpp
template< class T, class Deleter >
class unique_ptr<T[], Deleter>;
```
_(since C++11)_

## Template parameters
- `T`: the owned type. The primary template manages a single object; the partial specialization manages an array.
- `Deleter`: the callable destruction policy. It participates in the `unique_ptr` type and may also define the stored pointer type.

## Semantics
- `unique_ptr` has exclusive ownership. It is movable but not copyable.
- `unique_ptr` represents exclusive ownership and is therefore the default smart pointer for single-owner resources.
- The primary template models ownership of one object and provides dereference operators.
- The partial specialization `unique_ptr<T[]>` models ownership of a dynamically allocated array and provides [operator[]](/cpp/memory/unique_ptr/operator_at/) instead of `operator*` and `operator->`.
- `unique_ptr<T[]>` does not provide `operator*` or `operator->`.
- The managed object is destroyed by the stored deleter when the `unique_ptr` is destroyed or replaced. The stored deleter is invoked as `get_deleter()(ptr)`.
- Unlike [std::shared_ptr](/cpp/memory/shared_ptr/), `unique_ptr` has no control block and no shared ownership state.

## Example
```cpp
#include <iostream>
#include <memory>

struct widget
{
    int value;
    ~widget() { std::cout << "destroy " << value << '\n'; }
};

int main()
{
    auto p = std::make_unique<widget>(widget{42});
    std::unique_ptr<widget> q = std::move(p);

    if (!p && q)
        std::cout << q->value << '\n';

    q.reset();
}
```

This is the core `unique_ptr` pattern: one owning handle at a time, explicit ownership transfer with `std::move`, and automatic cleanup on reset or scope exit.

## Member types
| Member type | Definition |
| --- | --- |
| `pointer` | `std::remove_reference_t<Deleter>::pointer` if that type exists, otherwise `T*` |
| `element_type` | `T` |
| `deleter_type` | `Deleter` |

The `pointer` member means `unique_ptr` can manage more than raw pointers when the deleter supplies a custom nullable handle type.

## Reference map
| Area | Key entries |
| --- | --- |
| Construction and lifetime | [unique_ptr::unique_ptr](/cpp/memory/unique_ptr/unique_ptr/), [unique_ptr::~unique_ptr](/cpp/memory/unique_ptr/~unique_ptr/), [operator=](/cpp/memory/unique_ptr/operator/) |
| Observers and access | [get](/cpp/memory/unique_ptr/get/), [get_deleter](/cpp/memory/unique_ptr/get_deleter/), [operator bool](/cpp/memory/unique_ptr/operator_bool/), [operator[]](/cpp/memory/unique_ptr/operator_at/) |
| Ownership modifiers | [release](/cpp/memory/unique_ptr/release/), [reset](/cpp/memory/unique_ptr/reset/), [swap](/cpp/memory/unique_ptr/swap/) |
| Non-member utilities | [comparison operators](/cpp/memory/unique_ptr/operator_cmp/), [swap](/cpp/memory/unique_ptr/swap2/), [operator<<](/cpp/memory/unique_ptr/operator_ltlt/), [`std::hash<std::unique_ptr>`](/cpp/memory/unique_ptr/hash/) |
| Factory functions | [make_unique, make_unique_for_overwrite](/cpp/memory/unique_ptr/make_unique/) |

## Incomplete types and polymorphism
`unique_ptr` may be constructed for an [incomplete type](/cpp/language/incomplete_type/), which is why it is commonly used in pImpl-style interfaces. If the default deleter is used, the type must be complete where destruction actually happens: in the destructor, [reset()](/cpp/memory/unique_ptr/reset/), and move assignment.

`std::unique_ptr<Derived>` is implicitly convertible to `std::unique_ptr<Base>` when the pointer and deleter are convertible. With the default deleter, deleting through `Base` is undefined behavior unless `Base` has a virtual destructor.

## Custom deleters and pointer types
Unlike [std::shared_ptr](/cpp/memory/shared_ptr/), `unique_ptr` may manage objects through any handle type that satisfies [NullablePointer](/cpp/named_req/nullablepointer/). This is enabled through the deleter's `pointer` member typedef and is one reason `Deleter` is part of the type.

When `Deleter` is an empty type, implementations typically store it with empty-base optimization, so a `unique_ptr<T>` often has the size of a single pointer.

## Notes
Only non-`const` `unique_ptr` can transfer ownership. A `const std::unique_ptr<T>` can still destroy its object, but it cannot be moved from.

Prefer [make_unique](/cpp/memory/unique_ptr/make_unique/) over spelling `new` directly unless you specifically need a custom pointer or deleter construction path.

There is no class template argument deduction from a raw pointer, because deduction cannot distinguish between the single-object and array forms.

## See also
- [std::shared_ptr](/cpp/memory/shared_ptr/): smart pointer with shared ownership
- [std::weak_ptr](/cpp/memory/weak_ptr/): non-owning observer for `shared_ptr`
- [std::default_delete](/cpp/memory/default_delete/): default deletion policy used by `unique_ptr`
