package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ExporterConstants;

import org.apache.sling.api.SlingHttpServletRequest;
import com.adobe.aem.guides.wknd.spa.react.core.models.AisleRocket;

@Model(adaptables = SlingHttpServletRequest.class, adapters = {
        AisleRocket.class }, resourceType = AisleRocketImpl.RESOURCE_TYPE)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class AisleRocketImpl implements AisleRocket {

    static final String RESOURCE_TYPE = "wknd-spa-react/components/aislerocket";

    @Self
    private SlingHttpServletRequest request;

    @ValueMapValue
    private Integer limit;

    @Override
    public Integer getLimit() {
        return limit;
    }

    @Override
    public String getExportedType() {
        return AisleRocketImpl.RESOURCE_TYPE;
    }
}
