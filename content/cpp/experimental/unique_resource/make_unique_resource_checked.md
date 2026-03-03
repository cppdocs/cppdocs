---
title: "std::experimental::make_unique_resource_checked"
source_path: "cpp/experimental/unique_resource/make_unique_resource_checked"
header: "<experimental/scope>"
category: "experimental"
---

Creates a unique_resource, initializes its stored resource handle is initialized with [std::forward](/cpp/utility/forward/)<R>(r) and its deleter with [std::forward](/cpp/utility/forward/)<D>(d). The created unique_resource owns the resource if and only if bool(r == invalid) is false.

## Declarations
```cpp
template< class R, class D, class S = std::decay_t<R> >
std::experimental::unique_resource<std::decay_t<R>, std::decay_t<D>>
make_unique_resource_checked( R&& r, const S& invalid, D&& d )
noexcept(/*see below*/);
```
_(library fundamentals TS v3)_

## Notes
make_unique_resource_checked exists to avoid calling a deleter function with an invalid argument.

Resource handle r is either copied or moved into the return value, and the created unique_resource always holds an underlying resource handle with object type.

## Example
```cpp
#include <cstdio>
#include <experimental/scope>
 
int main()
{
    // avoid calling fclose when fopen fails
    auto file = std::experimental::make_unique_resource_checked(
        std::fopen("potentially_nonexistent_file.txt", "r"),
        nullptr,
        [](std::FILE *fptr) { std::fclose(fptr); }
    );
    if (file.get())
        std::puts("The file exists.");
    else
        std::puts("The file does not exist.");
}
```
