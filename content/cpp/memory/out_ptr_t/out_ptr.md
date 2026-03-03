---
title: "std::out_ptr"
source_path: "cpp/memory/out_ptr_t/out_ptr"
header: "<memory>"
category: "memory"
since: "C++23"
---

Returns an [std::out_ptr_t](/cpp/memory/out_ptr_t/) with deduced template arguments that captures arguments for resetting by reference.

## Declarations
```cpp
template< class Pointer = void, class Smart, class... Args >
auto out_ptr( Smart& s, Args&&... args );
```
_(since C++23)_

## Parameters
- `s`: the object (typically a smart pointer) to adapt
- `args...`: the arguments for resetting to capture

## Return value
[std::out_ptr_t](/cpp/memory/out_ptr_t/)<Smart, P, Args&&>(s, [std::forward](/cpp/utility/forward/)<Args>(args)...), where P is

## Notes
Users may specify the template argument for the template parameter Pointer, in order to interoperate with foreign functions that take a Pointer*.

As all arguments for resetting are captured by reference, the returned out_ptr_t should be a temporary object destroyed at the end of the full-expression containing the call to the foreign function, in order to avoid dangling references.

## Example
```cpp
#include <memory>
#include <sqlite3.h>
 
int main()
{
    auto close_db = [](sqlite3* db) { sqlite3_close(db); };
 
    {
        // open an in-memory database, and manage its lifetime with std::unique_ptr
        std::unique_ptr<sqlite3, decltype(close_db)> up;
        sqlite3_open(":memory:", std::out_ptr(up));
 
        sqlite3* db = up.get();
        // do something with db ...
    }
    {
        // same as above, but use a std::shared_ptr
        std::shared_ptr<sqlite3> sp;
        sqlite3_open(":memory:", std::out_ptr(sp, close_db));
 
        sqlite3* db = sp.get();
        // do something with db ...
    }
}
```

## See also
- [inout_ptr](/cpp/memory/inout_ptr_t/inout_ptr/)
- [make_uniquemake_unique_for_overwrite](/cpp/memory/unique_ptr/make_unique/)
- [make_sharedmake_shared_for_overwrite](/cpp/memory/shared_ptr/make_shared/)
