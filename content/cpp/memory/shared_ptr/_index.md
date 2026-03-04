---
title: "std::shared_ptr"
source_path: "cpp/memory/shared_ptr"
header: "<memory>"
---

`std::shared_ptr` is a smart pointer that retains shared ownership of an object through a pointer. Several `shared_ptr` objects may own the same object. When the strong reference count reaches zero, the managed object is destroyed. The control block itself remains alive until the weak reference count also reaches zero.

Unlike [unique_ptr](/cpp/memory/unique_ptr/), ownership is reference-counted. A `shared_ptr` can also be empty, or it can participate in aliasing ownership: it may own one object while storing a pointer to a different subobject that is exposed through `get()`, dereference, and comparisons.

## Declarations
```cpp
template< class T > class shared_ptr;
```
_(since C++11)_

## Template parameters
- `T`: the pointed-to type. `T` may be an object type, an array type, or even a function type depending on the specialization and operation being used.

## Member types
| Member type | Definition |
| --- | --- |
| `element_type` | `T` until C++17; `std::remove_extent_t<T>` since C++17 |
| `weak_type` | [`std::weak_ptr<T>`](/cpp/memory/weak_ptr/) (since C++17) |

## Semantics
- Ownership is shared through a control block that tracks the strong and weak reference counts.
- The stored pointer is what [`get()`](/cpp/memory/shared_ptr/get/), dereference, and comparisons observe.
- The managed pointer is what the deleter receives when ownership reaches zero.
- A `shared_ptr` may be empty even when the stored pointer is non-null if it was produced by an aliasing constructor.
- All specializations meet the [CopyConstructible](/cpp/named_req/CopyConstructible/), [CopyAssignable](/cpp/named_req/CopyAssignable/), and [LessThanComparable](/cpp/named_req/LessThanComparable/) requirements and are contextually convertible to `bool`.

### Thread-safety boundary
Different `shared_ptr` objects that share ownership may be read or modified concurrently without extra synchronization, even when they refer to the same control block. Access to the same `shared_ptr` object from multiple threads still requires synchronization if any access uses a non-const member function. [`std::atomic<std::shared_ptr>`](/cpp/memory/shared_ptr/atomic2/) exists for that case.

### Aliasing and subobject ownership
Aliasing constructors let a `shared_ptr` share ownership of one object while storing a pointer to a different object, commonly a member subobject. This is useful when a subobject must stay valid only as long as its containing allocation remains alive.

## Incomplete and function types
`std::shared_ptr` may be used with an [incomplete type](/cpp/language/incomplete_type/) T. However, constructing from a raw pointer and resetting from a raw pointer require the pointed-to type to be complete at the call site.

`T` may also be a function type. In that form, `shared_ptr` manages a function pointer and is sometimes used to keep a dynamically loaded library alive while exported functions are still referenced.

## Example
```cpp
#include <chrono>
#include <iostream>
#include <memory>
#include <mutex>
#include <thread>
 
using namespace std::chrono_literals;
 
struct Base
{
    Base() { std::cout << "Base::Base()\n"; }
    ~Base() { std::cout << "Base::~Base()\n"; }
};
 
struct Derived : public Base
{
    Derived() { std::cout << "Derived::Derived()\n"; }
    ~Derived() { std::cout << "Derived::~Derived()\n"; }
};
 
void print(auto rem, std::shared_ptr<Base> const& sp)
{
    std::cout << rem << "\n\tget() = " << sp.get()
              << ", use_count() = " << sp.use_count() << '\n';
}
 
void thr(std::shared_ptr<Base> p)
{
    std::this_thread::sleep_for(987ms);
    std::shared_ptr<Base> lp = p;
    {
        static std::mutex io_mutex;
        std::lock_guard<std::mutex> lk(io_mutex);
        print("Local pointer in a thread:", lp);
    }
}
 
int main()
{
    std::shared_ptr<Base> p = std::make_shared<Derived>();
 
    print("Created a shared Derived (as a pointer to Base)", p);
 
    std::thread t1{thr, p}, t2{thr, p}, t3{thr, p};
    p.reset();
 
    print("Shared ownership between 3 threads and released ownership from main:", p);
 
    t1.join();
    t2.join();
    t3.join();
 
    std::cout << "All threads completed, the last one deleted Derived.\n";
}
```

This shows the core `shared_ptr` model: reference-counted shared ownership, safe copying across independently owned `shared_ptr` objects, and object destruction when the last owning handle is released.

## Reference map
| Area | Key entries |
| --- | --- |
| Construction and lifetime | [shared_ptr::shared_ptr](/cpp/memory/shared_ptr/shared_ptr/), [shared_ptr::~shared_ptr](/cpp/memory/shared_ptr/~shared_ptr/), [operator=](/cpp/memory/shared_ptr/operator=/), [reset](/cpp/memory/shared_ptr/reset/), [swap](/cpp/memory/shared_ptr/swap/) |
| Observers | [get](/cpp/memory/shared_ptr/get/), [operator* and operator->](/cpp/memory/shared_ptr/operator*/), [operator[]](/cpp/memory/shared_ptr/operator_at/), [use_count](/cpp/memory/shared_ptr/use_count/), [unique](/cpp/memory/shared_ptr/unique/), [operator bool](/cpp/memory/shared_ptr/operator_bool/), [owner_before](/cpp/memory/shared_ptr/owner_before/), [owner_hash](/cpp/memory/shared_ptr/owner_hash/), [owner_equal](/cpp/memory/shared_ptr/owner_equal/) |
| Factory functions | [make_shared, make_shared_for_overwrite](/cpp/memory/shared_ptr/make_shared/), [allocate_shared, allocate_shared_for_overwrite](/cpp/memory/shared_ptr/allocate_shared/) |
| Pointer adaptation and utilities | [pointer casts](/cpp/memory/shared_ptr/pointer_cast/), [get_deleter](/cpp/memory/shared_ptr/get_deleter/), [comparison operators](/cpp/memory/shared_ptr/operator_cmp/), [operator<<](/cpp/memory/shared_ptr/operator_ltlt/), [atomic free functions](/cpp/memory/shared_ptr/atomic/) |
| Related helpers | [`std::atomic<std::shared_ptr>`](/cpp/memory/shared_ptr/atomic2/), [`std::hash<std::shared_ptr>`](/cpp/memory/shared_ptr/hash/), [deduction guides](/cpp/memory/shared_ptr/deduction_guides/), [enable_shared_from_this](/cpp/memory/enable_shared_from_this/) |

## Notes
Constructing a fresh `shared_ptr` directly from a raw pointer already owned by another `shared_ptr` is undefined behavior, because it creates a separate control block instead of sharing the existing one.

`make_shared` and `allocate_shared` construct the managed object and control block in a single allocation on typical implementations, which improves locality and usually reduces allocation overhead compared to separate allocations.

[`use_count()`](/cpp/memory/shared_ptr/use_count/) is primarily intended for debugging and diagnostics. Program logic should generally not depend on its exact value.

Cycles of `shared_ptr` objects prevent destruction because the strong reference counts never reach zero. [`weak_ptr`](/cpp/memory/weak_ptr/) is used to break such cycles.

### Implementation notes
- Implementations typically store two pointers inside a `shared_ptr`: the stored pointer returned by `get()`, and a pointer to the control block.
- The control block usually holds either the managed object itself or a pointer to it, the deleter, the allocator, the strong reference count, and the weak reference count.
- Existing implementations do not always use exactly this layout, but the two-level ownership model is the important abstraction boundary.

## See also
- [unique_ptr](/cpp/memory/unique_ptr/): smart pointer with unique ownership
- [weak_ptr](/cpp/memory/weak_ptr/): non-owning weak observer of a `shared_ptr` control block
