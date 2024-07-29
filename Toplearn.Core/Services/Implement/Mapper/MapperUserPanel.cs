﻿using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Toplearn.Core.DTOs.UserPanel;
using Toplearn.Core.Services.Interface.Mapper;

namespace Toplearn.Core.Services.Implement.Mapper
{
    public class MapperUserPanel(IMapper mapper) : IMapperUserPanel
    {

        public UserPanelViewModel MapTheUserPanelViewModelFromClaims(List<Claim> claim)
        {
            return mapper.Map<UserPanelViewModel>(claim);
        }
    }
}
