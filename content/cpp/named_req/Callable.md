---
title: "C++ named requirements: Callable"
source_path: "cpp/named_req/Callable"
category: "named_req"
---

A Callable type is a type for which the [INVOKE](/cpp/utility/functional/) and [INVOKE<R>](/cpp/utility/functional/) operations (used by, e.g., [std::function](/cpp/utility/functional/function/), [std::bind](/cpp/utility/functional/bind/), and [std::thread::thread](/cpp/thread/thread/thread/)) are applicable.

## Notes
[Pointers to data members](/cpp/language/pointer/#Pointers_to_data_members) are Callable, even though no function calls take place.

## See also
- [is_invocableis_invocable_ris_nothrow_invocableis_nothrow_invocable_r](/cpp/types/is_invocable/)
- [std::invoke](/cpp/utility/functional/invoke/)
- [invocableregular_invocable](/cpp/concepts/invocable/)
- [invokeinvoke_r](/cpp/utility/functional/invoke/)
