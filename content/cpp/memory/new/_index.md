---
title: "Low level memory management"
source_path: "cpp/memory/new"
---

The [new-expression](/cpp/language/new/) is the only way to create an object or an array of objects with dynamic storage duration, that is, with lifetime not restricted to the scope in which it is created. A new-expression obtains storage by calling an allocation function. A [delete-expression](/cpp/language/delete/) destroys a most derived object or an array created by a new-expression and calls the deallocation function. The default allocation and deallocation functions, along with related functions, types, and objects, are declared in the header [<new>](/cpp/header/new/).
